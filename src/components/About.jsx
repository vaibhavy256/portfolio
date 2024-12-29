const About = ()=>{
    return <>
       <div className="main-container py-16 bg-gray-100">
    <h1 className="text-center text-5xl underline font-bold text-gray-800">
        About Me
    </h1>
    <div className="mt-12 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Professional Experience
        </h2>
        <p className="text-lg text-gray-700 mb-8">
            <span className="font-medium">Cybage Software:</span> Software Engineer
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Education
        </h2>
        <div className="space-y-4">
            <div>
                <p className="text-lg font-medium text-gray-800">
                    Post Graduation Diploma in Advanced Computing
                </p>
                <p className="text-gray-600">
                    Sept 2021 - Apr 2022, Sunbeam Institute
                </p>
            </div>
            <div>
                <p className="text-lg font-medium text-gray-800">
                    BE in Computer Science Engineering
                </p>
                <p className="text-gray-600">
                    Winter 2020, MGM’s College of Engineering, Nanded
                </p>
            </div>
            
        </div>
    </div>
</div>




    </>;
};
export default About;