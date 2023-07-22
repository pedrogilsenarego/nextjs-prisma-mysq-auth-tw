type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    username?: string;
  }
}
