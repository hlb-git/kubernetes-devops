# Part 1: Exercise 3


* ```kubectl delete deployment string-gen-d97d464d6-wm2hx  ``` removes existing deployment

* ```kubectl apply -f manifests/deployment.yaml  ``` creates another deployment with declaratinve file

* ```kubectl get pods ```  

```
NAME                                    READY   STATUS    RESTARTS   AGE
string-generator-dep-5d5698c6cf-khvh7   1/1     Running   0          15m    

```


* ```kubectl logs -f string-generator-dep-5d5698c6cf-khvh7 ```

```
Sat Dec 07 2024 13:31:33 GMT+0000 (Coordinated Universal Time): 6f8884da-692d-46af-aaa3-560d7696d613
Sat Dec 07 2024 13:31:38 GMT+0000 (Coordinated Universal Time): ddc83d9e-d2c7-4f7b-9b20-649760836e9b
Sat Dec 07 2024 13:31:43 GMT+0000 (Coordinated Universal Time): dd9fdd9e-faeb-4584-9050-6c066fecb732
Sat Dec 07 2024 13:31:48 GMT+0000 (Coordinated Universal Time): 46c09d62-726c-4404-9501-2f7c776269fe
Sat Dec 07 2024 13:31:53 GMT+0000 (Coordinated Universal Time): 68e5e9c1-b3b5-48a5-9bec-e037a49c7b8e
...
...

 ```
