function About({ name, role = "Developer", element, children }) {
  return (
    <>
      {element}
      <h1>Hi {name}</h1>
      <h2>You are a {role} at Sheryians Coding School</h2>
      {children} {/* This is where the nested content will appear */}
    </>
  );
}

export default About;
