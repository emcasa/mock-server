import configure from './configure'
import run from './run'

async function main(args) {
  try {
    switch(args[0]) {
      case 'configure': return await configure(args.slice(1))
      default: return await run()
    }
  } catch(error)  {
    console.error(error)
    process.exit(0)
  }
}

main(process.argv.slice(2))