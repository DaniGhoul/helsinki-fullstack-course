const Header = (props) => {
  console.log(props);
  return(
    <h1>{props.course}</h1>
  )  
}

const Content = (props) => {
  console.log(props);
  return(
    <>
    <p>{props.part} contains {props.exercises} exercises.</p>
    </>
  )
}

const Total = (props) => {
  console.log(props);
  return(
    <p>Total number of exercises: {props.total}.</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ]

  return (
    <>
      <Header course={course} />
      <Content part={parts[0].part} exercises={parts[0].exercises} />
      <Content part={parts[1].part} exercises={parts[1].exercises} />
      <Content part={parts[2].part} exercises={parts[2].exercises} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </>
  )
}

export default App