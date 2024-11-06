import React, { useEffect, useState } from "react";
import { CodeProjectModel } from "./CodeProject";
import { CodeProjectList } from "./CodeProjectList";
import { Observable, Subject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { switchMap, tap, map, catchError } from "rxjs/operators";

// Define the API URL
const api = "https://api.timdarrow.com/codeprojects";

// Subject to trigger data fetching
const fetchDataSubject = new Subject<void>();

// Observable to handle the API call
const codeProjects$: Observable<CodeProjectModel[]> = fetchDataSubject.pipe(
  switchMap(() =>
    ajax.getJSON<CodeProjectModel[]>(api).pipe(
      tap({
        next: () => console.log("Data fetched successfully"),
        error: (error) => console.warn("Error fetching data", error),
      }),
      catchError(() => []) // Return an empty array in case of error
    )
  )
);

export const CodeProjectContainer = () => {
  const [loading, setLoading] = useState(true);
  const [codeProjectList, setCodeProjectList] = useState<CodeProjectModel[]>(
    []
  );

  useEffect(() => {
    // Subscribe to the observable to get data and update the state
    const subscription = codeProjects$.subscribe((data) => {
      setCodeProjectList(data);
      setLoading(false);
    });

    // Trigger the initial data fetch
    fetchDataSubject.next();

    // Clean up the subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CodeProjectList codeProjectList={codeProjectList} />
      )}
    </>
  );
};
