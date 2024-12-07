# Part 1: Exercise 4

* ```kubectl get pods ```   See the running pod

```
NAME                                    READY   STATUS    RESTARTS   AGE
string-generator-dep-5b474f78dc-l8pr2   1/1     Running   0          46m
todoapp-dep-7b984b868b-zm8r2            1/1     Running   0          23s

```

*  This applies deployment declaration file with image tag 1.0.1    ```kubectl apply -f manifests/deployment.yaml ```

```  
    deployment.apps/todoapp-dep configured

```

* ```kubectl get pods ```   See the pod swapping process

```
NAME                                    READY   STATUS        RESTARTS   AGE
string-generator-dep-5b474f78dc-l8pr2   1/1     Running       0          49m
todoapp-dep-7b984b868b-zm8r2            1/1     Terminating   0          2m49s
todoapp-dep-cc464b4dc-nqvdw             1/1     Running       0          21s

```

* ```kubectl get pods ```   Done with the swap 

```
NAME                                    READY   STATUS    RESTARTS   AGE
string-generator-dep-5b474f78dc-l8pr2   1/1     Running   0          49m
todoapp-dep-cc464b4dc-nqvdw             1/1     Running   0          54s

```

* ```kubectl logs -f todoapp-dep-cc464b4dc-nqvdw ``` The server is running as expected
```
Server application started in port 5000...
```
