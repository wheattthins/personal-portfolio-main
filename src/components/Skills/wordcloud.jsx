import { useEffect, useRef } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = () => {
  const containerRef = useRef(null)

  // Skills matching current resume
  const texts = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML5',
    'CSS3',
    'C#',
    'Java',
    'Python',
    'Swift',
    '.NET',
    'REST APIs',
    'SQL Server',
    'Git',
    'GitHub',
    'VS Code',
    'Azure',
    'Xcode',
  ]
  const options = {
    // shrink the sphere on narrow screens so it fits the viewport
    radius: Math.min(300, Math.floor((window.innerWidth - 60) / 2)),
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  }
  useEffect(() => {
    const cloud = TagCloud(containerRef.current, texts, options)
    return () => cloud.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="main">
      <span className="content" ref={containerRef}></span>
    </div>
  )
}

export default WordCloud
