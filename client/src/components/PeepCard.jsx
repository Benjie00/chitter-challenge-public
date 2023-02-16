import moment from "moment";

const PeepCard = ({ data, EllipsisButton, user }) => {
  return (
    <>
      {data
        .slice()
        .reverse()
        .map((post) => {
          return (
            <div key={post._id}>
              <div className="centerCustom">
                <div className="relative p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-1">
                  <h5 className="mb-0 text-sml font-semibold tracking-tight dark:text-gray-100 text-gray-500">
                    <p>{post.userName}</p>
                  </h5>
                  {post.userName === user.userName ? (
                    <div className="absolute top-2 right-5">
                      {EllipsisButton && <EllipsisButton />}
                    </div>
                  ) : null}
                  <p className="font-light text-gray-700 dark:text-gray-100 text-xs">
                    {moment(post.createdAt).fromNow()}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {post.field}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PeepCard;
