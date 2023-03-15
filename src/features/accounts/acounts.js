import { Account } from './account'
import { selectAccounts } from './acountsSlice'
import { useSelector } from 'react-redux'

export default function Accounts() {
  const accounts = useSelector(selectAccounts)


  return (
    <aside className='main-content__accounts-panel'>
      <div className='accounts-panel__wrapper'>
        <h2 className='accounts-panel__title'>Subreddits</h2>
        <ul className='accounts-list'>
          {Object.values(accounts).map(entry => (
              <Account 
                key={entry.rdit}
                account={entry} />
            ))}
        </ul>
      </div>
    </aside>
  )
}
