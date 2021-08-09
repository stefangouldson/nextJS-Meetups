import Layout from '../components/layout/Layout'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  function onAddMeetup (enteredData) {
    console.log(enteredData)
  }
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </Layout>
  )
}

export default NewMeetupPage
