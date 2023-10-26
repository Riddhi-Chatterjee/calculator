pipeline {
    agent any 

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('git pull') {
            steps {
                git url: 'https://github.com/Riddhi-Chatterjee/calculator.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install' //Installing dependencies
                sh 'tar czf Calculator.tar.gz node_modules public scripts src Jenkinsfile package.json' //Creating a compressed archive of the required files and directories
            }
        }
        stage('Test') {
            steps {
                sh 'chmod 777 ./scripts/test.sh' //Ensuring that test.sh is executable
                sh './scripts/test.sh' //Executing test.sh
            }
        }
    }
}
