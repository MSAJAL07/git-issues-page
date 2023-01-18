import './App.css';
import axios from 'axios';
import { useCallback, useEffect, useState, useRef } from 'react';
import Issues from './components/issue';
import Nav from './components/nav';


const otherValues = ['Auther', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort'];

function App() {
  const [issuesData, setIssues] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)


  const fetchData = async (page = 1) => {
    setLoading(true)
    const issues = await axios(`https://api.github.com/repos/facebook/react/issues?page=${page}`)
    console.log("issues :", issues);
    setIssues([...issuesData, ...issues.data])
    setLoading(false)
  }

  const observer = useRef()
  const lastIssueRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchData(pageNumber + 1)
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    }, {
      rootMargin: '500px',
    })
    if (node) observer.current.observe(node)
    // eslint-disable-next-line
  }, [loading])


  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div className='IssueListingContainer'>
        <div className='IssuesTableWraper'>
          <div className='IssuesTableHeaderContainer '>
            <div className='OpenClosedIssueDetails'>
              <a className='OpenClosedIssueAnchor'
                selected
                href="/"
              >
                253 Open
              </a>
              <a className='OpenClosedIssueAnchor'
                style={{ marginLeft: '10px' }}
                href='/'
              >

                6378 closed
              </a>
            </div>
            <div className='OtherLabel '>
              {otherValues.map(value => <span className='OtherDetail' key={value} value={value} >
                {value}
                {' '}
              </span>)}
            </div>
          </div>

          <div className='IssuesContainerWrapper'></div>
          {
            issuesData && issuesData.map((data, index) => {
              return (
                issuesData.length === index + 1 ?
                  <Issues ref={lastIssueRef} key={index} data={data} /> :
                  <Issues key={index} data={data} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
