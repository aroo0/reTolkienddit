import avatar from '../../data/communityIcon_wmmxgfx6xrf01.png'

export default function Acounts() {
    return (
        <aside class='main-content__accounts-panel'>
          <div class='accounts-panel__wrapper'>
          <h2 class='accounts-panel__title'>Subreddits</h2>
          <ul class='accounts-list'>
            <li>
              <button class='account'>
                <img class='account__avatar' src={avatar} alt="user avatar" />
                Tolkien
              </button>
            </li>
            <li>
              <button class='account'>
                <img class='account__avatar' src={avatar} alt="user avatar" />
                TolkienMemes
              </button>
            </li>
            <li>
              <button class='account'>
                <img class='account__avatar' src={avatar} alt="user avatar" />
                YourLOTRquotes
              </button>
            </li>

          </ul>
        </div>
      </aside>

    )
}