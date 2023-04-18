import React, { useEffect, useState, useRef } from 'react'

function VideoPlayer({isPlaying, src})
{
  const playVideos = useRef(null)

  useEffect(() => {
    if(!isPlaying){
      console.log("wlaczam play")
      playVideos.current.play()
    }
    else{
      console.log("wlaczam stop")
      playVideos.current.pause()
    }
  })

  return(
    <>
      <video src={src} ref={playVideos}/>
    </>
  )
}

function EffectTutorial() 
{
  const [play, setPlay] = useState(true);
  const [search, setSearch] = useState(' ')
  function handlePlay(){
    if(play){
      setPlay(false)
    }
    else{
      setPlay(true)
    }
  }

  function handleSearch(event)
  {
    setSearch(event.target.value)
  }

  return (
    <>
      <br/>
      <input onChange={handleSearch}/>
      <h1>
        Obejrzyj moj filmik przyjacielu:
        <button onClick={handlePlay} >{play ? 'start' : 'stop'}</button>
      </h1>
      <br/>
      <VideoPlayer isPlaying={play} src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} />
    </>
  )
}

export default EffectTutorial


   