import React from "react";
import AddOrEditPost from "./Add0rEditPost";
import Loader from "./../components/loader/Loader";

function PostSuccessPop({
  setIsAddPost,
  isAddPost,
  setPostSuccess,
  setIsLoader,
  setPostVisible
}) {
  const handleBTH = () => {
    setIsAddPost(!isAddPost);
    setPostSuccess(false);
    setIsLoader(false);
    setPostVisible(true)
  };
  return (
    <>
      <div className="PostSuccessPop">
        <div className="">
          <div className="d-flex">
            <img src="/assets/success.gif" alt="" width={"40px"} />
            <h1>your post as been add successfully</h1>
          </div>
          <p className="mt-3" style={{ textAlign: "center" }}>
            visit post list for more details
          </p>
          <button className="post-pop-button" onClick={handleBTH}>
            Back to home
          </button>
        </div>
      </div>
    </>
  );
}
const AddPostParent = ({
  locationList,
  setPostData,
  locationId,
  showPostData,
  editUser,
  message,
  setIsAddPost,
  isAddPost,
  setEditUser,
  handleSubmit,
  isLoader,
  postSuccess,
  setIsLoader,
  setPostSuccess,
  setPostVisible
}) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {isLoader ? (
          <Loader />
        ) : postSuccess ? (
          <PostSuccessPop
            isAddPost={isAddPost}
            setIsLoader={setIsLoader}
            setIsAddPost={setIsAddPost}
              setPostSuccess={setPostSuccess}
              setPostVisible={setPostVisible}
          />
        ) : (
          <AddOrEditPost
            editUser={editUser}
            locationList={locationList || []}
            setPostData={setPostData}
            locationId={locationId}
            showPostData={showPostData}
            message={message}
            isAddPost={isAddPost}
            setIsAddPost={setIsAddPost}
            setEditUser={setEditUser}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
};

export default AddPostParent;
