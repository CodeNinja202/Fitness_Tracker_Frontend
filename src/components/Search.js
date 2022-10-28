import React, { useEffect, useState } from "react";

const Search = ({ activities,fetchActivities, setSearchResults , setIsLoading}) => {
  
  
  const [activitiesList, setActivitiesList] = useState([]);
 
  const [activity, setActivity] = useState("any")
  
  
  useEffect(() => {
    Promise.all([fetchActivities()])
      .then(([activities]) => {
        setActivitiesList(activities);
      })
      .catch(console.error);
  }, []);
 
 
  return (
    <form
      id="search"
      onSubmit={async (event) => {
        event.preventDefault()
    setIsLoading(true)
        try {
          const results = await fetchActivities({
            activity,
          });
          setSearchResults(results);
        } catch (error) {
          console.error();
        } finally {
          setIsLoading(false);
        }
      }}
    >
      
      
      <fieldset>
        <label htmlFor="select-activity">
          Activites <span className="activity-count">({activities.length})</span>
        </label>
        <select
          name="activity"
          id="select-activity"
          value={activity}
          onChange={(event) => setActivity(event.target.value)}
        >
          <option value="any">Any</option>
          {
          
          activities.map((activity, idx) => {
              return (
                <option key={`${idx}:${activity.name}`} value={activity.id}>
                  {activity.name}
                </option>
              );
             
            })

          }
        </select>
      </fieldset>
     {/* // <button>Duration & Count</button> */}
    </form>
  );
};

export default Search;
