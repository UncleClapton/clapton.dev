/* eslint-disable react/jsx-no-bind */
import React from 'react'





import styles from './ScopePicker.module.css'





const knownScopes = [
  'rescues',
  'rats',
  'users',
  'nicknames',
  'clients',
  'ships',
]

const scopePermissions = [
  'read',
  'write',
]



export default function ScopePicker ({ className, value, onChange }) {
  const handleChange = (event) => {
    const nextValue = { ...value }

    if (event.target.checked) {
      nextValue[event.target.name] = true
    } else {
      delete nextValue[event.target.name]
    }

    onChange?.(nextValue)
  }
  const handleSelectAll = () => {
    onChange?.(knownScopes.reduce((acc, scope) => {
      acc[`${scope}.read`] = true
      acc[`${scope}.read.me`] = true
      acc[`${scope}.write`] = true
      acc[`${scope}.write.me`] = true

      return acc
    }, {}))
  }
  const handleSelectNone = () => {
    onChange?.({})
  }
  return (
    <div className={[styles.scopePicker, className]}>
      <div className="text-right">
        <button type="button" onClick={handleSelectAll}>{'All'}</button>
        <button type="button" onClick={handleSelectNone}>{'None'}</button>
      </div>
      {
        knownScopes.map((scope) => {
          return (
            <div key={scope}>
              <h3 className={styles.scopeTitle}>{scope}</h3>
              {
                scopePermissions.map((permission) => {
                  const fullScope = `${scope}.${permission}`
                  const fullScopeSelf = `${fullScope}.me`

                  return (
                    <div key={fullScope} className={styles.scopeOpts}>
                      <span>
                        <input
                          checked={Boolean(value?.[fullScope])}
                          id={fullScope}
                          name={fullScope}
                          type="checkbox"
                          value={fullScope}
                          onChange={handleChange} />
                        <label htmlFor={fullScope}>{`.${permission}`}</label>
                      </span>
                      <span>
                        <input
                          checked={Boolean(value?.[fullScopeSelf])}
                          id={fullScopeSelf}
                          name={fullScopeSelf}
                          type="checkbox"
                          value={fullScopeSelf}
                          onChange={handleChange} />
                        <label htmlFor={fullScopeSelf}>{'.me'}</label>
                      </span>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}
