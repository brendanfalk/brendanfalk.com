import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

import {bundleMDX} from 'mdx-bundler'




const postsDirectory = path.join(process.cwd(), 'posts')
const componentsDirectoryRelativeToPosts = path.join("..", "components")
const componentsDirectory = path.join(process.cwd(), 'components')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx?$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string })
    }
  })
  // Sort posts by date
  return allPostsData
  .sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  // Filter out posts that don't have a date
  .filter((a) => a.date )

}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.mdx?$/, '')
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')


   var fileDict = getAllCustomComponentsForMDX() as {[key: string]: string}

   const result = await bundleMDX(fileContents, {
     files: fileDict
   })

   const {code, frontmatter} = result

   return {
     id, 
     code,
     frontmatter
   }



  //  OLD REMARK WAY OF PARSING

  // // Use gray-matter to parse the post metadata section
  // const matterResult = matter(fileContents)

  // // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content)
  // const contentHtml = processedContent.toString()

  // // Combine the data with the id and contentHtml
  // return {
  //   id,
  //   contentHtml,
  //   ...(matterResult.data as { date: string; title: string })
  // }
}




function getAllCustomComponentsForMDX(): {[key: string]: string} {

  const listOfFiles = getArrayOfFilesNamesBeneathComponentsDir(componentsDirectory)
  
  var out: {[key: string]: string} = {}

  listOfFiles.forEach(function(file) {

    var fullPath = path.join(componentsDirectory, file)
    out[path.join(componentsDirectoryRelativeToPosts, file)] = fs.readFileSync(fullPath, 'utf8')
  })


  return out


}


// Given a directory, get the relative paths of the files beneath the directory
const getArrayOfFilesNamesBeneathComponentsDir = function(dirPath, prependString="", arrayOfFiles = []): string[] {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    
    // If it's a directory, recrusively run this same functino
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {

      arrayOfFiles = getArrayOfFilesNamesBeneathComponentsDir(path.join(dirPath, file), path.join(prependString, file),  arrayOfFiles)


    } 
    
    // Only do tsx. The tsx component can import extra data if it wants
    else if (file.endsWith(".tsx")) {

      arrayOfFiles.push(path.join(prependString, file))

    }
  })

  return arrayOfFiles
}


