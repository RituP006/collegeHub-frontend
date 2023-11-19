import React from 'react';


interface College {
    slug: number;
    name: string;
  }

const College = () => {
    const [colleges, setColleges] = useState<College[]>([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const data = await getAllColleges();
    //     setColleges(data);
    //   };
  
    //   fetchData();
    // }, []);
  
    return (
      <div>
        <h1>Colleges</h1>
        {/* <ul>
          {colleges.map((college) => (
            <li key={college.id}>{college.name}</li>
          ))}
        </ul> */}
      </div>
    );
}

export default College;

function useState<T>(arg0: never[]): [any, any] {
    throw new Error('Function not implemented.');
}


function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}
