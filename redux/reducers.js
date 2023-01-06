import { SET_DATA, SET_IS_LOGGED_IN } from "./actions";

const initialState = {
  data: [
    {
      id: 1,
      name: "Shaheen Shah Afridi",
      imageUri:
        "https://resources.pulse.icc-cricket.com/players/33992/284/4530.png",
      messages: [
        {
          text: "Hi",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "Hello",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "How are you?",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
        {
          text: "I am good",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
      ],
    },
    {
      id: 2,
      name: "Asif Ali",
      imageUri:
        "data:image/jpeg;base64,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",
      messages: [
        {
          text: "Salam",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "Walaikum Salam",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "Kese ho?",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
        {
          text: "Alhamdulillah",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
      ],
    },
    {
      id: 3,
      name: "Shahid Afridi",
      imageUri:
        "https://m.cricbuzz.com/a/img/v1/192x192/i1/c146389/shahid-afridi.jpg",
      messages: [
        {
          text: "Hi",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "Hello",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "How are you?",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
        {
          text: "I am good",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
      ],
    },
    {
      id: 4,
      name: "Babar Azam",
      imageUri:
        "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSVJErnUZkwd58J44TFowT-9SxDas-CzppcFxmOKEWfKWLoTCx3BYx2ldycvmGHzhRVOXGCV4XnCv8FcJmn8GgfIftBajHD7ZPVVI-jdVYk",
      messages: [
        {
          text: "Hi",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "Hello",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "How are you?",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
        {
          text: "I am good",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
      ],
    },
    {
      id: 5,
      name: "Muhammad Hafeez",
      imageUri:
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Mohammad_Hafeez_in_2017.png",
      messages: [
        {
          text: "Hi",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "Hello",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "How are you?",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
        {
          text: "I am good",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
      ],
    },
    {
      id: 6,
      name: "Muhammad Rizwan",
      imageUri:
        "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRET2vwtzXG4MijpskoJZ3nZBNlSXZL-tJZE_iyGuWbu3YqD5W4QGrmxuWEGKQGyQPeTGFjRDNoT1u5wgg",
      messages: [
        {
          text: "Hi",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "Hello",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "How are you?",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
        {
          text: "I am good",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
      ],
    },
    {
      id: 7,
      name: "Shadab Khan",
      imageUri:
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRqvnCmmb_DJl7DHbp_OtoVhMKHo0PRscjP5Zvsquycq7raz_SpyicOnfUCW3FOnEXP7Re_XGrkElLIKlo",
      messages: [
        {
          text: "Hi",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "Hello",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "How are you?",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
        {
          text: "I am good",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
      ],
    },
    {
      id: 8,
      name: "Haris Sohail",
      imageUri:
        "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQcV4o_ZTdcNPyhzgJbLpFDYgUFH_8Kjpb5DpSpgpXKcCgjRGMFAkhoH0nBQhl9RqDji5PQw4_LJutMcPg",
      messages: [
        {
          text: "Hi",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "Hello",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "How are you?",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
        {
          text: "I am good",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
      ],
    },
    {
      id: 9,
      name: "Yasir Shah",
      imageUri:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316500/316540.png",
      messages: [
        {
          text: "Hi",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "Hello",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "How are you?",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
        {
          text: "I am good",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
      ],
    },
    {
      id: 10,
      name: "Younus Khan",
      imageUri:
        "data:image/jpeg;base64,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",
      messages: [
        {
          text: "Hi",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "Hello",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 12, 0, 0),
        },
        {
          text: "How are you?",
          me: true,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
        {
          text: "I am good",
          me: false,
          dateSent: new Date(2022, 12, 2, 9, 13, 0, 0),
        },
      ],
    },
  ],
  isLoggedIn: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
}

export default userReducer;
