import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "sally",
  //       age: 12,
  //       email: "sally@test1.com",
  //     },
  //   ],
  // });
  const user = await prisma.user.update({
    where: {
      email: "kyle@test.com",
    },
    data: {
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
