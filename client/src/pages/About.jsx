import React from 'react'

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About Our Class Project
      </h1>
      <p className="mb-4 text-slate-700"></p>
      <p className="mb-4 text-slate-700">
        Our mission is to develop a website for a Hospital Management System.
        The website to going to create a platform for both patients and doctors
        to communicate and manage their interactions.{" "}
      </p>
      <p className="mb-4 text-slate-700">
        Interactions such as adding appointments from the side of the patient,
        doctors being able to see the patient’s medical information and ongoing
        reports on the patient. The system will have access to a database to
        store all the information on the doctors and the patients. The features
        of this website are partially decided, depending on the feasibility of
        the project we will keep adding features to enhance the user experience.
      </p>
    	<br></br>
      <h1 className="text-xl font-bold mb-4 text-slate-800">
        Project Members:
      </h1>
      <ul class="list-disc pl-7">
        <li>  Sameer Hasan</li>
        <li>  Ray</li>
        <li>  Yeffry</li>
        <li>  Thomas</li>
        <li>  Forest</li>
      </ul>
    </div>
  );
}
