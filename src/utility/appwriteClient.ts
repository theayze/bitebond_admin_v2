import { Account, Appwrite, Storage } from "@refinedev/appwrite";

const APPWRITE_URL = 'https://cloud.appwrite.io/v1';
const APPWRITE_PROJECT = "666190b6000d516078cd";

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);
const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { account, appwriteClient, storage };

