import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  function onAddMeetup (enteredData) {
    console.log(enteredData)
  }
  return (
      <NewMeetupForm onAddMeetup={onAddMeetup} />
  )
}

export default NewMeetupPage
