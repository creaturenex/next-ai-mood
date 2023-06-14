// // react server component
// import EntryCard from '@/components/EntryCard'
// import NewEntryCard from '@/components/NewEntryCard'
// import { analyze } from '@/utils/ai'
// import { getUserByClerkID } from '@/utils/auth'
// import { prisma } from '@/utils/db'
// import Link from 'next/link'

// const getEntries = async () => {
//   const user = await getUserByClerkID()
//   const entries = await prisma.journalEntry.findMany({
//     where: {
//       userId: user.id,
//     },
//     orderBy: {
//       createdAt: 'desc',
//     },
//     include: {
//       analysis: true,
//     }
//   })
//   await analyze(`I am going to give you a journal entry, I want you to analyze it for a few things. I need the mood, a summary, what the subject is, and a color representing the mood. You need to respond back with formatted JSON like so: {"mood": "", "subject": "", "color": "", "negative":""}.

//   entry:
//   Today was a really great day! I was able to propagate some frogspawn and torch corals`)

//   return entries
// }

// const JournalPage = async () => {
//   const entries = await getEntries()

//   return (
//     <div className="p-10 bg-zinc-400/10 h-full">
//       <h2 className="text-3xl mb-8">Journal</h2>
//       <div className="grid grid-cols-3 gap-4 ">
//         <NewEntryCard />
//         {entries.map((entry) => (
//           <Link href={`/journal/${entry.id}`} key={entry.id}>
//             <EntryCard entry={entry} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default JournalPage

import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import { analyze } from '@/utils/ai'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import Link from 'next/link'

const getEntries = async () => {
  const user = await getUserByClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  await analyze(`I am going to give you a journal entry, I want you to analyze it for a few things. I need the mood, a summary, what the subject is, and a color representing the mood. You need to respond back with formatted JSON like so: {"mood": "", "subject": "", "color": "", "negative":""}.

  entry:
  Today was a really great day! I was able to propagate some frogspawn and torch corals`)

  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()

  return (
    <div className="p-10 bg-zinc-400/10 h-full">
      <h1 className="text-4xl mb-8 font-semibold">Journal</h1>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default JournalPage
