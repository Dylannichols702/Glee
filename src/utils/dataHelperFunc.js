import axios from "axios";

import { notify } from "./toastNotifyHelper";

export const getWatchLaterData = async (token) => {
  try {
    const response = await axios.get("/api/user/watchlater", {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200 || response.status === 201) {
      return response.data.watchlater;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postWatchLaterData = async (
  { _id, title, description, creator, embedId },
  dispatch,
  token
) => {
  try {
    const response = await axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: "/api/user/watchlater",
      data: JSON.stringify({
        video: { _id, title, description, creator, embedId },
      }),
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "SET_WATCH_LATER", payload: response.data.watchlater });
      notify("Added to Watch Later", "success", "🎉");
    }
  } catch (error) {
    console.error(error);
    notify("Error adding to Watch Later", "error", "😢");
  }
};

export const getHistoryData = async (token) => {
  try {
    const response = await axios.get("/api/user/history", {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200 || response.status === 201) {
      return response.data.history;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postHistoryData = async (
  { _id, title, creator, embedId },
  dispatch,
  token
) => {
  try {
    const response = await axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: "/api/user/history",
      data: JSON.stringify({
        video: { _id, title, creator, embedId },
      }),
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "SET_WATCHED_HISTORY", payload: response.data.history });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getLike = async (token) => {
  try {
    const response = await axios.get("/api/user/likes", {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200 || response.status === 201) {
      return response.data.like;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postLike = async (
  { _id, title, description, creator, embedId },
  dispatch,
  token
) => {
  try {
    const response = await axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: "/api/user/likes",
      data: JSON.stringify({
        video: { _id, title, description, creator, embedId },
      }),
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "SET_LIKE", payload: response.data.likes });
      notify("Added to Likes Videos", "success");
    }
  } catch (error) {
    console.error(error);
    notify("Error adding to Likes Videos", "error");
  }
};

export const getPlayListsData = async (token) => {
  try {
    const response = await axios.get("/api/user/playlists", {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200 || response.status === 201) {
      console.log(response.data.playlists);
      return response.data.playlists;
    }
  } catch (error) {
    console.error(error);
  }
};
