import React from "react";
import { useLocation } from "react-router-dom";

function Resume() {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return <div>Veri bulunamadı</div>;
  }

  const {
    personalInfo = {},
    education = [],
    workExperience = [],
    projects = [],
    skills = [],
  } = data;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{personalInfo.fullName || "İsim Bilgisi"}</h1>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phone}</p>
      <p>{personalInfo.address}</p>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Eğitim</h2>
        {education.length > 0 ? (
          education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold">{edu.schoolName}</p>
              <p>{edu.degree} - {edu.fieldOfStudy}</p>
              <p>{edu.startYear} - {edu.endYear}</p>
            </div>
          ))
        ) : (
          <p>Eğitim bilgisi yok.</p>
        )}
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">İş Deneyimi</h2>
        {workExperience.length > 0 ? (
          workExperience.map((job, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold">{job.companyName}</p>
              <p>{job.jobTitle}</p>
              <p>{job.startDate} - {job.endDate}</p>
              <p>{job.description}</p>
            </div>
          ))
        ) : (
          <p>İş deneyimi bilgisi yok.</p>
        )}
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Projeler</h2>
        {projects.length > 0 ? (
          projects.map((proj, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold">{proj.title}</p>
              <p>{proj.description}</p>
              <p>
                Kullanılan Teknolojiler:{" "}
                {
                  Array.isArray(proj.technologiesUsed)
                    ? proj.technologiesUsed.map(t => typeof t === "string" ? t : t.title).join(", ")
                    : typeof proj.technologiesUsed === "string"
                      ? proj.technologiesUsed
                      : typeof proj.technologiesUsed === "object" && proj.technologiesUsed.title
                        ? proj.technologiesUsed.title
                        : "Yok"
                }
              </p>

              {proj.githubLink && (
                <a href={proj.githubLink} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  GitHub Link
                </a>
              )}
            </div>
          ))
        ) : (
          <p>Proje bilgisi yok.</p>
        )}
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Yetenekler</h2>
        {Array.isArray(skills) && skills.length > 0 ? (
          <ul className="list-disc list-inside">
            {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
          </ul>
        ) : (
          <p>Yetenek bilgisi yok.</p>
        )}
      </section>
    </div>
  );
}

export default Resume;
