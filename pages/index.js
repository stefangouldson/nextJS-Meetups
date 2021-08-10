import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>NextJS Meetups</title>
        <meta name="Description" content="Browse a huge list of meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString()
      })
      )
    },
    revalidate: 10
  }
}

// export async function getServerSideProps(context){
// const req = context.req
// const res = context.res
//   return {
//     props: {
//       meetups: MEETUPS
//     }
//   }
// }

export default HomePage
