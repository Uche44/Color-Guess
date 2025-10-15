import sdk from "@farcaster/miniapp-sdk";

export const getUser = async (setUser) => {
    try {
      console.log("Calling sdk.context.user()");
      const fetchedUser = (await sdk.context).user;
      setUser({
        image: fetchedUser.pfpUrl,
        username: fetchedUser.displayName,
      });

      console.log("fetched:", fetchedUser);
    } catch (error) {
      console.log("user error:", error);
    }
  };