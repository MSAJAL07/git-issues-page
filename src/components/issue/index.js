import './style.css'
import React from 'react'
import Labels from '../lable'
import { getDifference } from '../../commons/getDifference'
const Issues = React.forwardRef(({ data }, ref) => {
    const { title, number, created_at, user: { login }, labels } = data
    return (
        <div ref={ref} className="IssueWrapper">
            <div className='IssueAnchorNTitleWrapper' >
                <div className='IssueOpenedIconWrapper'>
                    <svg className="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>
                </div>
                <div className='IssueAnchorWithLabel'>
                    <a className='IssueAnchor' color="#24292e" href='#'>
                        {' '}
                        {title}
                    </a>
                    <Labels labels={labels} />
                </div>
            </div>
            <div className='IssueOpenedBy'>
                <span> # {number} {' '} opened {' '}
                    {getDifference(created_at)}
                    {' '}
                    ago by
                    {' '}
                    <a className='UserAnchor' href='#'>
                        {login}
                    </a>
                </span>
            </div>
        </div>
    )
})

export default Issues;