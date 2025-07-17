const conf = {
  appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
  appwriteProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT),
  appwriteDatabaseId: String(process.env.REACT_APP_APPWRITE_DATABASE),
  appwriteCollectionId: String(process.env.REACT_APP_APPWRITE_COLLECTION),
  appwriteBucketId: String(process.env.REACT_APP_APPWRITE_BUCKET),
};

export default conf;
