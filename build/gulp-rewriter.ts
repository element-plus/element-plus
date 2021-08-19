import through2 from 'through2'

const rewriter = (rewriteTo = '../..') => {
  return through2.obj(function(file, _, cb) {
    const compIdentifier = '@element-plus'

    file.contents = Buffer.from(
      file.contents
        .toString()
        .replaceAll(compIdentifier, rewriteTo),
    )
    cb(null, file)
  })
}

export default rewriter
