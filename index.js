"use strict"

const getState = () => {
  const $ = (element) => {
    return document.getElementById(element).value
  }

  const state = {
    name: $('name'),
    address: $('address'),
    phone: $('phone'),
    email: $('email'),
    about: $('about'),
    career: $('career'),
    education: $('education'),
    job1: {
      date: {
        start: $('jobStart'),
        end: $('jobEnd')
      },
      details: $('jobDetails')
    },
    job2: {
      date: {
        start: $('job2Start'),
        end: $('job2End')
      },
      details: $('job2Details')
    },
    job3: {
      date: {
        start: $('job3Start'),
        end: $('job3End')
      },
      details: $('job3Details')
    },
    references: $('references')
  }
  return state
}

const buildResume = (state) => {
  const $ = (value) => {
    document.write(value)
  }
//styling
  const styleText = `
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background: #fafafa;
  color: rgba(0,0,0,0.75);
}

h1 {
  color: rgba(0,0,0,0.9);
}

h1, p {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px 24px;
}

.lineBreak {
  width: 100%;
  height: 1px;
  margin: 16px auto;
  border-bottom: 1px solid #eee;
}

.CV {
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 48px auto;
  padding: 16px 0px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.14);
}

.sections {
  box-sizing: border-box;
  padding: 8px 0px;
  width: 100%;
  display: flex;
  border-left: 3px solid transparent;
  transition: 0.2s;
}

.sections:hover {
  border-left: 3px solid #64FFDA;
}

.left-col {
  width: 35%;
}

.right-col {
  width: 65%;
}
`

//outputt 
  const createGroup = (left, right) => {
    $('<div class="sections">')
    $('<div class="left-col">')
    $('<p>' + left + '</p>')
    $('</div>')
    $('<div class="right-col">')
    $('<p>' + right + '</p>')
    $('</div>')
    $('</div>')
  }

  document.open()
  $('<html><head>')
  $('<title>' + state.name + "'s CV </title>")
  $('<style>' + styleText + '</style>')
  $('</head><body><div class="CV">')
  $('<h1>' + state.name + '</h1>')
  $('<p>' + state.email + '</p>')
  $('<p>' + state.phone + '</p>')
  $('<p>' + state.address + '</p>')
  $('<div class="lineBreak"></div>')
  createGroup('ABOUT ME', state.about)
  createGroup("CAREER OBJECTIVES", state.career)
  createGroup('EDUCATION', state.education)
  createGroup('EMPLOYMENT EXPERIENCE', '')
  createGroup(state.job1.date.start + ' to ' + state.job1.date.end, state.job1.details)
  createGroup(state.job2.date.start + ' to ' + state.job2.date.end, state.job2.details)
  createGroup(state.job3.date.start + ' to ' + state.job3.date.end, state.job3.details)
  createGroup('REFERENCES', state.references)
  $('</div>')
  $('</body></html>')
  document.close()
}


document.getElementById('createCV').addEventListener("click", (e) => {
  e.preventDefault()

buildResume(getState())
})
