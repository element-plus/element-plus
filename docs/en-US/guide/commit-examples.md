---
title: Commit Examples
lang: en-US
---

# Commit Examples

## Why this chapter exists

Please refer to [Conventional Commits](https://www.conventionalcommits.org/) for more information.

A good commit message enables us:

1. To understand what the contributor is trying to do
2. Automatically generates change log

### Rule for writing commit message

```md
# (If applied, this commit will...) <subject> (Max 72 characters)

# |<---- Using a Maximum Of 72 Characters ---->|

# Explain why this change is being made

# |<---- Try To Limit Each Line to a Maximum Of 72 Characters ---->|

# Provide links or keys to any relevant tickets, articles or other resources

# Use issues and merge requests' full URLs instead of short references,

# as they are displayed as plain text outside of GitLab

# --- COMMIT END ---

# --------------------

# Remember to

# Capitalize the subject line

# Use the imperative mood in the subject line

# Do not end the subject line with a period

# Subject must contain at least 3 words

# Separate subject from body with a blank line

# Commits that change 30 or more lines across at least 3 files should

# describe these changes in the commit body

# Do not use Emojis

# Use the body to explain what and why vs. how

# Can use multiple lines with "-" for bullet points in body

# For more information: https://chris.beams.io/posts/git-commit/

# --------------------
```

### Template for commit messages

Below is a template commit message for your reference.

```md
feat(components): [button] I did something with button

Blank between subject and body is expected.(period is expected)
Describes your change in one line or multi-line.
Capitalize your first letter when starting a new line
Please do not exceeds 72 characters per line, because that would be harder to comprehend.

- You can also add bullet list symbol for better layout
```

For the subject header, the format is:

```
[type](scope): [messages]
```

You can checkout the allowed values for **type** and **scope** in [commitlint.config.js](https://github.com/element-plus/element-plus/blob/c2ee36a7fc72b17742d43ecdff4e2912c416141d/commitlint.config.js#L57),

### Useful links

[Keeping git commit history clean](https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/)
