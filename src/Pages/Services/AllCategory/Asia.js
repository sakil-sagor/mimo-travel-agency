import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

// doctor category 

const Asia = () => {
    const [services] = useServices([]);
    console.log(services);

    let result = services.filter(service => service.continent === "Asia")
    console.log(result);
    return (
        <div className="grid  md:grid-cols-2  md:gap-x-8 gap-y-8 ">
            {
                result.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Asia;