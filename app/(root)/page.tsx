import BookList from "@/components/BookList"
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
// import { auth } from "@/auth";
// import { desc } from "drizzle-orm";

const Home =async() => {
  // const session = await auth();

  // const latestBooks = (await db
  //   .select()
  //   .from(books)
  //   .limit(10)
  //   .orderBy(desc(books.createdAt))) as Book[];
    const result = await db.select().from(users);
    console.log(JSON.stringify(result,null,2));
    return(<>

      <BookOverview createdAt={null} {...sampleBooks[0]}/>

      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>);
 
};

export default Home;
