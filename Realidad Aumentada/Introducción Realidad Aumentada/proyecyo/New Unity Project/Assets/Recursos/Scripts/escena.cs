using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class escena : MonoBehaviour {

    public string nombre;

	// Use this for initialization
	void Start () {
		
	}

    // Update is called once per frame
    public void cargarescena() {

        SceneManager.LoadScene(nombre);

    }
}
