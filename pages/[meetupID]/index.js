import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetUpDetails = (props) => {
  return <MeetupDetail 
  title={props.meetupData.title} 
  address={props.meetupData.address} 
  description={props.meetupData.description} 
  image={props.meetupData.image} 
  />
}

export async function getStaticPaths(){
  return {
    fallback: false ,
    paths: [
      {
        params: {
          meetupID: 'm1',
        }
      }
    ]
  }
}

export async function getStaticProps(context){
  const meetupID = context.params.meetupID
  return {
    props: {
      meetupData: {
        id: meetupID,
        title: 'First Meetup',
        description: 'Description',
        address: 'London',
        image: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg'
      }
    }
  }
}

export default MeetUpDetails
