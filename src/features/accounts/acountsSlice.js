import { createSlice } from "@reduxjs/toolkit";


const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        'Tolkien': {
            rdit: '',
            name: 'Tolkien',
            jsonUrl: 'https://www.reddit.com/search.json?q=$tolkien',
            img: 'https://www.pngitem.com/pimgs/m/231-2312027_jrr-tolkien-logo-hd-png-download.png'
        },
        'lotr': {
            rdit: 'lotrs',
            name: 'LOTR',
            jsonUrl: 'https://www.reddit.com/search.json?q=$lotr',
            img: 'https://logos-download.com/wp-content/uploads/2017/10/The_Lord_of_the_Rings_logo-700x700.png'

        }, 
        'tolkienfans': {
            rdit: 'tolkienfans',
            name: 'Tolkien: LOTR, Hobbit, Silmarillion, etc.', 
            jsonUrl: 'https://www.reddit.com/r/tolkienfans.json',
            img: 'https://styles.redditmedia.com/t5_2r6jm/styles/communityIcon_wmmxgfx6xrf01.png'
        },
        'Lord of The Rings': {
            rdit: 'lotr',
            name: 'Lord of The Rings',
            jsonUrl: 'https://www.reddit.com/r/lotr.json',
            img: 'https://b.thumbs.redditmedia.com/b7Yp44krFYcH_Els9ONr_iEMj7icz5rUURqe80_eO7I.png'
        }
    },
    reducers: {
        addQuery: (state, action) => {
            
        }

    }

})



export const selectAccounts = (state) => state.accounts
export default accountsSlice.reducer