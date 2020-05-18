import qs from 'qs'
import React, { useState } from 'react'





import styles from './OAuthGenerator.module.css'
import ScopePicker from '~/components/ScopePicker'
import useInputState from '~/hooks/useInputState'





export default function OAuthGenerator () {
  const [destination, handleChange] = useInputState('http://localhost:3000/authorize')
  const [scopes, handleScopeChange] = useState({})
  const query = qs.stringify({
    scope: Object.keys(scopes).join(' '),
    client_id: 'f9a05b86-5d14-496b-b76b-92544c82e5f8',
    redirect_uri: 'https://clapton.dev/oauthtest',
    response_type: 'token',
    state: 'pepega',
  })
  return (
    <div>
      <label>
        <b>{'Destination: '}</b>
        <input className={styles.input} type="text" value={destination} onChange={handleChange} />
      </label>
      <ScopePicker value={scopes} onChange={handleScopeChange} />
      <br />
      <div className="text-right">
        <a className="button" href={`${destination}?${query}`}>
          {'Test Now!'}
        </a>
      </div>
    </div>
  )
}
