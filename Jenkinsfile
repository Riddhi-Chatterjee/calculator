pipeline {
    agent {
        any {
        }
    }

    stages {
        stage('Git Pull') {
            steps {
                git url: 'https://github.com/Riddhi-Chatterjee/calculator.git', branch: 'main',
                credentialsId: 'Credential_Git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'tar czf Node.tar.gz node_modules src scripts Jenkinsfile package.json public'
            }
        }
        stage('Test') {
            steps {
                sh 'chmod +x ./scripts/test.sh'
                sh './scripts/test.sh'
            }
        }
    }
}
