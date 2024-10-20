import Navebar from '@/app/components/Navebar'
import Footer from '@/app/components/Footer'

const VideoEditing = () => {
  return (
    <div >
      <Navebar />
      <div className='bg-slate-500 h-70'></div>
      <h1> Video Editing</h1>
      
      <p>Video editing is the process of manipulating and rearranging video footage to create a new work.<br/> It involves various techniques such as cutting, trimming, adding transitions, effects, and audio to enhance the visual storytelling. Editors use software like Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve to piece together shots, ensuring the final product aligns with the desired narrative and style.

The importance of video editing cannot be overstated; it transforms raw footage into a polished, engaging piece that captures the audience's attention. Whether for marketing, entertainment, or education, effective video editing helps convey messages clearly and creatively, making it a vital skill in today's digital landscape.</p>
      <Footer />
    </div>
  )
}

export default VideoEditing