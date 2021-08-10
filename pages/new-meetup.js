import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router';
import Head from 'next/head'

const NewMeetupPage = () => {
  const router = useRouter();

  async function onAddMeetup (enteredData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST', 
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
    router.push('/')
  }
  return (
    <>
      <Head>
        <title>Add New Meetups</title>
        <meta name="Description" content="Add a new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  )
}

export default NewMeetupPage
