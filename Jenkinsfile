pipeline {
    agent any 

    tools {
        nodejs "nodejs"
    }

    environment {
            CI = 'true'
            registry = 'riddhich/calculator'
            DOCKERHUB_CRED = credentials('CRED_DOCKER')
            registryCredential = 'CRED_DOCKER'
            dockerimage = ''
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
        stage('Build docker image') {
            steps {
                script{
                    dockerimage = sh '/usr/local/bin/docker build -t'+registry+':latest .'
                }
            }
        }
        stage('Push image to DockerHub') {
            steps {
                script{
                    sh '/usr/local/bin/docker login -u "RiddhiCh" -p "ripple@2002"'
                    sh '/usr/local/bin/docker push ' +registry +':latest'
                } 
            }
        }
    }
}
