import Layout from '../components/layout/Layout'
import MeetupList from '../components/meetups/MeetupList'

const HomePage = () => {

  const MEETUPS = [
    {
      id: 'm1',
      title: 'A First Meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg',
      address: 'London'
    }
  ]
  return (
    <Layout>
      <MeetupList meetups={MEETUPS} />
    </Layout>
  )
}

export default HomePage
