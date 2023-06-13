import { getUserByClerkID } from "@/utils/auth"
import {prisma } from '@/utils/db'

const getEntry = async(id) => {
  const user = await getUserByClerkID()

  const entry = await prisma.journalEntry.findUnique()
}

const EntryPage = ({ params }) => {
  return (
    <div className="w-full h-full">
      {params.id}
    </div>
  )
}

export default EntryPage
