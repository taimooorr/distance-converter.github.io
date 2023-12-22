pipeline {
    agent any

    stages {
      stage('Build') {
        steps {
          script {
            dockerImage = docker.build("taimoorrkhan/distance-converter:${env.BUILD_ID}")
        }
    }
}
        stage('Push') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Test') {
            steps {
                sh 'ls -l index.html' // Simple check for index.html
            }
        }

        stage('Deploy') {
            steps {
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(
                            configName: "ec2-ssh",
                            transfers: [sshTransfer(
                                execCommand: """
                                    docker pull taimoorrkhan/distance-converter:${env.BUILD_ID}
                                    docker stop distance-converter-container || true
                                    docker rm distance-converter-container || true
                                    docker run -d --name distance-converter-container -p 80:80 taimoorrkhan/distance-converter:${env.BUILD_ID}
                                """
                            )]
                        )
                    ]
                )
            }
        }
    }

    post {
        failure {
            mail(
                to: 'taimoorkhan.tmr123@gmail.com',
                subject: "Failed Pipeline: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                body: "Something is wrong with the build ${env.BUILD_URL}"
            )
        }
    }
}
