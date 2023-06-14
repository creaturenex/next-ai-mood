import { PromptTemplate } from "langchain"
import { OpenAI } from "langchain/llms/openai"
import { StructuredOutputParser } from 'langchain/output_parsers'
import { z } from 'zod'

const getPrompt = async (content) => {
  const format_instructions = parser.getFormatInstructions()

  const prompt = new PromptTemplate({
  template: 'Analyze the following journal entry. Follow the intrusctions and format your response to match the format instructions, no matter what! \n{format_instructions}\n{entry}',
  inputVariables: ['entry'],
  partialVariables: { format_instructions },
  })

  const input = await prompt.format({
    entry: content,
  })

  console.log(input)
  return input
}

// this allows us to create a json schema
// most ai use
// structured output is useful for formatted data like a doc etc!!!
const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z.string().describe('The mood of the journal entry'),
    subject: z.string().describe('The subject of the journal entry'),
    summary: z.string().describe('quick sumamry of the entry'),
    color: z.string().describe('a hexidecimal color code that represents the mood of the entry. Example #0101FE for blue representing happiness.'),
    negative: z
      .boolean()
      .describe(
        'is the journal entry negative? (i.e. does it contain negative emotions?).'
      ),
  })
)

// the temperate means how silly/funny a prompt can be ie a value of 1 means outrageous while 0 means should be factual
// interesting edge can pop up about "halluciation", where propts with a temp of 0 still generate silly prompts.
export const analyze = async (prompt) => {
  const input = await getPrompt(prompt.content)
  const model = new OpenAI({temperature: 0, modelName: 'gpt-3.5-turbo'})
  const result = await model.call(input)
  console.log(result)
}
