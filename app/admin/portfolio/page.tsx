
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { projects } from '@/data/portfolio'
import type { PortfolioProject } from '@/types/portfolio'

export default function AdminPortfolioPage() {
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is authenticated on mount
    fetch('/api/projects')
      .then(res => {
        if (res.status === 401) {
          setIsAuthenticated(false)
        } else {
          setIsAuthenticated(true)
        }
      })
  }, [])

  const handleSave = async (project: PortfolioProject) => {
    const res = await fetch('/api/projects', {
      method: project.id ? 'PUT' : 'POST',
      body: JSON.stringify(project),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    if (res.ok) {
      setEditingProject(null)
      // Refresh projects list
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: 'featuredImage' | 'gallery') => {
    if (!e.target.files?.length) return

    const formData = new FormData()
    formData.append('file', e.target.files[0])

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    if (res.ok) {
      const { url } = await res.json()
      if (field === 'gallery') {
        setEditingProject(prev => prev ? {
          ...prev,
          gallery: [...prev.gallery, url]
        } : null)
      } else {
        setEditingProject(prev => prev ? {
          ...prev,
          [field]: url
        } : null)
      }
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Admin Access Required</h1>
        <div>
          <script
            authed="location.reload()"
            src="https://auth.util.repl.co/script.js"
          ></script>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Portfolio Management</h1>
      
      <Button onClick={() => setEditingProject({
        id: '',
        title: '',
        description: '',
        content: '',
        featuredImage: '',
        gallery: [],
        category: '',
        tags: [],
        client: '',
        technologies: [],
        features: [],
        status: 'draft',
        dateCreated: new Date().toISOString(),
        dateUpdated: new Date().toISOString()
      })} className="mb-6">
        Add New Project
      </Button>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => setEditingProject(project)}
                >
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {editingProject && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm">
          <div className="container max-w-2xl mx-auto mt-20 p-6 bg-background rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-6">
              {editingProject.id ? 'Edit' : 'New'} Project
            </h2>
            <div className="space-y-4">
              {/* Basic Info */}
              <div>
                <Label>Title</Label>
                <Input 
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({
                    ...editingProject,
                    title: e.target.value
                  })}
                />
              </div>
              
              <div>
                <Label>Description</Label>
                <Input 
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({
                    ...editingProject,
                    description: e.target.value
                  })}
                />
              </div>

              <div>
                <Label>Content</Label>
                <textarea 
                  className="w-full p-2 border rounded"
                  value={editingProject.content}
                  onChange={(e) => setEditingProject({
                    ...editingProject,
                    content: e.target.value
                  })}
                  rows={5}
                />
              </div>

              {/* Images */}
              <div>
                <Label>Featured Image</Label>
                <Input 
                  type="file"
                  onChange={(e) => handleImageUpload(e, 'featuredImage')}
                  accept="image/*"
                />
                {editingProject.featuredImage && (
                  <img 
                    src={editingProject.featuredImage} 
                    alt="Featured" 
                    className="mt-2 h-32 object-cover rounded"
                  />
                )}
              </div>

              {/* Tags and Categories */}
              <div>
                <Label>Category</Label>
                <Input 
                  value={editingProject.category}
                  onChange={(e) => setEditingProject({
                    ...editingProject,
                    category: e.target.value
                  })}
                />
              </div>

              <div>
                <Label>Tags (comma-separated)</Label>
                <Input 
                  value={editingProject.tags.join(', ')}
                  onChange={(e) => setEditingProject({
                    ...editingProject,
                    tags: e.target.value.split(',').map(t => t.trim())
                  })}
                />
              </div>

              <div>
                <Label>Technologies (comma-separated)</Label>
                <Input 
                  value={editingProject.technologies.join(', ')}
                  onChange={(e) => setEditingProject({
                    ...editingProject,
                    technologies: e.target.value.split(',').map(t => t.trim())
                  })}
                />
              </div>

              <div>
                <Label>Features (comma-separated)</Label>
                <Input 
                  value={editingProject.features.join(', ')}
                  onChange={(e) => setEditingProject({
                    ...editingProject,
                    features: e.target.value.split(',').map(t => t.trim())
                  })}
                />
              </div>

              {/* Status */}
              <div>
                <Label>Status</Label>
                <select 
                  className="w-full p-2 border rounded"
                  value={editingProject.status}
                  onChange={(e) => setEditingProject({
                    ...editingProject,
                    status: e.target.value as 'draft' | 'published'
                  })}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setEditingProject(null)}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={() => handleSave(editingProject)}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
