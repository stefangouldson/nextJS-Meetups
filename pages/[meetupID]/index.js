import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient, ObjectId } from "mongodb" 
import Head from 'next/head'

const MeetUpDetails = (props) => {
  return (
    <>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name="Description" content={props.meetupData.description} />
    </Head>
      <MeetupDetail 
      title={props.meetupData.title} 
      address={props.meetupData.address} 
      description={props.meetupData.description} 
      image={props.meetupData.image} 
      />
    </>
  )
}

export async function getStaticPaths(){
  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  client.close()

  return {
    fallback: false ,
    paths: meetups.map((meetup) => ({
      params: { meetupID: meetup._id.toString() }
    }))
  }
}

export async function getStaticProps(context){
  const meetupID = context.params.meetupID

  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupID)});

  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      }
    }
  }
}

export default MeetUpDetails
