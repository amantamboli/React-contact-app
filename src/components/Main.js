import React, { useState } from "react";
import Person from "./Person";
import { useQuery } from "react-query";

const fetchPeople = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  console.log(page);
  return res.json();
};
const Main = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["person", page], () => fetchPeople(page));
  console.log(data, status);
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div class="container">
        <div class="box">
          <div class="search">
            <input
              type="text"
              placeholder="&#xF002;  Search name"
              onChange={(Event) => {
                setSearch(Event.target.value);
              }}
            />
          </div>

          {status === "loading" && <div>Loading data</div>}

          {status === "error" && <div>Error fetching data</div>}

          {status === "success" && (
            <div>
              {data.results
                .filter((person) => {
                  if (search == "") {
                    return person;
                  } else if (
                    person.name
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return person;
                  }
                })
                .map((person) => (
                  <Person key={person.name} person={person} />
                ))}
            </div>
          )}
          <div class="buttons">
            <button
              className="button"
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={page === 1}>back
            </button>
            <span>{page}</span>
            <button
              className="button"
              onClick={() => setPage((old) => Math.max(old + 1, 1))}
              disabled={page === 6}>Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
